const express = require("express");
const axios = require("axios");
const cors = require("cors");
const Redis = require("redis");

const redisClient = Redis.createClient()
const defaultExpire = 3000; // 缓存时间

const app = express();
app.use(cors());

app.get("/photos", async (req, res) => {
    const albumId = req.query.albumId;
    // 先查询 Redis 是否有数据
    redisClient.get("photos", async (err, data) => {
        if (err) console.error(err);
        // 有就直接响应
        if (data != null) {
            return res.json(JSON.parse(data))
        } else {
            // 没有就重新请求
            const {
                data
            } = await axios.get(
                "http://jsonplaceholder.typicode.com/photos", {
                    params: {
                        albumId
                    }
                }
            )
            redisClient.setex("photos", defaultExpire, JSON.stringify(data))
            res.json(data);
        }
    })
})
app.listen(7788, () => {
    console.log("server is running")
});