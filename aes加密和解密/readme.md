# 英文字母和中文汉字在不同字符集编码下的字节数
## 英文字母：
* 字节数 : 1;编码：GB2312

* 字节数 : 1;编码：GBK

* 字节数 : 1;编码：GB18030

* 字节数 : 1;编码：ISO-8859-1

* 字节数 : 1;编码：UTF-8

* 字节数 : 4;编码：UTF-16

* 字节数 : 2;编码：UTF-16BE

* 字节数 : 2;编码：UTF-16LE

## 中文汉字：
* 字节数 : 2;编码：GB2312

* 字节数 : 2;编码：GBK

* 字节数 : 2;编码：GB18030

* 字节数 : 1;编码：ISO-8859-1

* 字节数 : 3;编码：UTF-8

* 字节数 : 4;编码：UTF-16

* 字节数 : 2;编码：UTF-16BE

* 字节数 : 2;编码：UTF-16LE


* 1、ASCII码：一个英文字母（不分大小写）占一个字节的空间。一个二进制数字序列，在计算机中作为一个数字单元，一般为8位二进制数。换算为十进制 ，最小值-128，最大值127。如一个ASCII码就是一个字节。

* 2、UTF-8编码：一个英文字符等于一个字节，一个中文（含繁体）等于三个字节。中文标点占三个字节，英文标点占一个字节。

* 3、Unicode编码：一个英文等于两个字节，一个中文（含繁体）等于两个字节。中文标点占两个字节，英文标点占两个字节。

## AES的基本要求是，采用对称分组密码体制，密钥长度可以为128、192或256位，分组长度128位，算法应易在各种硬件和软件上实现。密钥有规定长度不能随便取值
### 一个字节一般占8位二进制（8 bit/byte）
## 需要按如下顺序引入crypto文件夹里的依赖
``` js
<script src="./crypto/core.min.js"></script>
<script src="./crypto/enc-base64.min.js"></script>
<script src="./crypto/md5.min.js"></script>
<script src="./crypto/evpkdf.min.js"></script>
<script src="./crypto/cipher-core.min.js"></script>
<script src="./crypto/aes.min.js"></script>
<script src="./crypto/pad-pkcs7.min.js"></script>
<script src="./crypto/mode-ecb.min.js"></script>
<script src="./crypto/enc-utf8.min.js"></script>
<script src="./crypto/enc-hex.min.js"></script>
```