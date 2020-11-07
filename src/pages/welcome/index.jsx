import React from 'react';
import Gallery from "react-photo-gallery";
import '@/style/index.less';

export default class Home extends React.Component {
  
  render() {
     const photos = [
      {
        src: "https://ui-akritar-1301852858.cos.ap-shanghai.myqcloud.com/迪士尼/迪士尼藏宝海湾8.jpg",
        width:2,
        height:1
      },
      {
        src: "https://ui-akritar-1301852858.cos.ap-shanghai.myqcloud.com/迪士尼/迪士尼藏宝海湾.jpg",
        width:1,
        height:2
      },
      {
        src: "https://ui-akritar-1301852858.cos.ap-shanghai.myqcloud.com/迪士尼/迪士尼藏宝海湾9.jpg",
        width:1,
        height:2
      },
      {
        src: "https://ui-akritar-1301852858.cos.ap-shanghai.myqcloud.com/迪士尼/迪士尼藏宝海湾3.jpg",
        width:1,
        height:2
      },
      {
        src: "https://ui-akritar-1301852858.cos.ap-shanghai.myqcloud.com/迪士尼/迪士尼藏宝海湾5.jpg",
        width:1,
        height:2
      },
      {
        src: "https://ui-akritar-1301852858.cos.ap-shanghai.myqcloud.com/迪士尼/迪士尼藏宝海湾6.jpg",
        width:1,
        height:2
      },
      {
        src: "https://ui-akritar-1301852858.cos.ap-shanghai.myqcloud.com/迪士尼/迪士尼藏宝海湾7.jpg",
        width:1,
        height:2
      },
      {
        src: "https://ui-akritar-1301852858.cos.ap-shanghai.myqcloud.com/迪士尼/迪士尼藏宝海湾2.jpg",
        width:1,
        height:2
      },
      {
        src: "https://ui-akritar-1301852858.cos.ap-shanghai.myqcloud.com/迪士尼/迪士尼钢铁侠战甲1.jpg",
        width:1,
        height:2
      },
      {
        src: "https://ui-akritar-1301852858.cos.ap-shanghai.myqcloud.com/迪士尼/迪士尼钢铁侠战甲3.jpg",
        width:1,
        height:2
      },
      {
        src: "https://ui-akritar-1301852858.cos.ap-shanghai.myqcloud.com/迪士尼/迪士尼七个小矮人矿车.jpg",
        width:1,
        height:2
      },
    ];
    return (
      <Gallery photos={photos} />
    );
  }
}
