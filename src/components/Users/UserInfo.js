import React from "react";
import { Button, Card, Avatar } from "antd";
import img from "../../constants/img";

const { Meta } = Card;

function UserInfo(props) {
  return (
    <>
      <Card
        className="w-1/3 shadow-lg rounded-lg bg-white"
        cover={<img alt="cover" src={img.maskgroup2} />}
      >
        <Meta
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          avatar={<Avatar size={160} src={props.userData.avatar} />}
          title={props.userData.first_name + " " + props.userData.last_name}
          description={props.userData.email}
        />

        <div className="flex justify-center gap-10 p-10">
          <Button type="primary" danger size="large">
            Connect
          </Button>
          <Button type="primary" danger ghost size="large">
            Message
          </Button>
        </div>
      </Card>
    </>
  );
}

export default UserInfo;
