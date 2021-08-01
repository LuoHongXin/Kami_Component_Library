const imageUpload = document.getElementById('imageUpload')
// 1、加载训练好的model(模型)
Promise.all([
  // faceExpressionNet 识别表情,开心，沮丧，普通
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  // faceLandmark68Net 识别脸部特征用于mobilenet算法
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  // ssdMobilenetv1 google开源AI算法除库包含分类和线性回归
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
]).then(start)

async function start() {
  const container = document.createElement('div')
  container.style.position = 'relative'
  document.body.append(container)
  // 获取 labeled_images 文件夹中图片带标签的引用描述
  const labeledFaceDescriptors = await loadLabeledImages();
  // 得到FaceMatcher用于计算两张脸相似度，并设置欧氏距离阈值为 0.6（0.6 以下为匹配成功）
  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)
  console.log(faceMatcher)
  let image // buffer 流图片
  let canvas // 画布，绝对定位于 container 容器，在 image 图片之上，用于展示计算数据
  document.body.append('模型加载完成')
  imageUpload.addEventListener('change', async () => {
    if (image) image.remove()
    if (canvas) canvas.remove()
    image = await faceapi.bufferToImage(imageUpload.files[0])
    container.append(image)
    canvas = faceapi.createCanvasFromMedia(image)
    container.append(canvas)
    const displaySize = {
      width: image.width,
      height: image.height
    }
    // 设置画布大小和图片一致
    faceapi.matchDimensions(canvas, displaySize)
    // 计算上传图片的脸部描述
    const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
    // 再根据图片的显示大小，调整检测框的大小
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    // 得到最匹配
    const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box // 检测框
      const drawBox = new faceapi.draw.DrawBox(box, {
        label: result.toString()
      })
      drawBox.draw(canvas)
    })
  })
}

function loadLabeledImages() {
  const labels = ['Black Widow', 'Captain America', 'Captain Marvel', 'Hawkeye', 'Jim Rhodes', 'Thor', 'Tony Stark', 'wukelang']
  return Promise.all(
    labels.map(async label => {
      const descriptions = []
      for (let i = 1; i <= 2; i++) {
        // Fetch and Display Images from an URL
        const img = await faceapi.fetchImage(`./labeled_images/${label}/${i}.jpg`)
        // 2、面部检测，默认情况下，detectAllFaces和detectSingleFace使用SSD Mobilenet V1人脸检测器。您可以通过传递相应的选项对象来指定面部检测器
        const detections = await faceapi.detectSingleFace(img)
          .withFaceLandmarks() // 3、检测脸部68个标记点，在面部检测之后，我们还可以预测每个检测到的面部的面部标志
          .withFaceDescriptor() // 4、计算脸部描述，在面部检测和面部标志预测之后，可以计算每个面部的面部描述符
        descriptions.push(detections.descriptor)
      }
      // 创建带标签的引用描述符
      return new faceapi.LabeledFaceDescriptors(label, descriptions)
    })
  )
}