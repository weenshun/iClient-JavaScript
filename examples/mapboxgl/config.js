/**
 * Leaflet 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var exampleConfig = {
    "iServer": {
        name: "iServer",
        content: {
            "map": {
                name: "地图",
                content: [
                    {
                        name: "3857底图",
                        thumbnail: "mb_TileLayer.png",
                        fileName: "01_tiledMapLayer"
                    }
                ]
            }

        }
    },
    "viz": {
        name: "可视化",
        content: {

            "VectorTileLayer": {
                name: "矢量瓦片",
                content: [
                    {
                        name: "MVT",
                        thumbnail: "mvtVectorTile.png",
                        fileName: "mvtVectorTile"
                    }
                ]
            }
        }
    },
};
/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
    "iServer": "fa-server",
    "viz": "fa-map",
};

/**
 *key值：为exampleConfig配置的key值    
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
    "iServer": "fa-server",
    "viz": "fa-map",
};