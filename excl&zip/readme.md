前端生成带有数据的table，然后利用 Export2Excel 封装好的工具，将表格导出成 excel 文件到本地

```javascript
formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
            return v[j];
        })
      );
}
import("Export2Excel.js 文件的路径").then((excel) => {
    // 设置表头
    const tHeader = ["Id", "Title", "Author", "Readings", "Date"];
        const filterVal = [
          "id",
          "title",
          "author",
          "pageviews",
          "display_time",
        ];
        const list = [表格数据];
        const data = formatJson(filterVal, list); // 自己写的方法处理数据
        excel.export_json_to_excel({
          header: tHeader, // []
          data,// []
          filename: "文件名",
          autoWidth: true, // 是否自动宽度
          bookType:'xlsx'  // 文件类型 'xlsx', 'csv', 'txt'
        });
      });
```

