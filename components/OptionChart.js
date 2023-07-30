import { Radio } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

const OptionChart = ({ value }) => {
    const router = useRouter();

    return (
        <Radio.Group
            size="large"
            buttonStyle="solid"
            onChange={(e) => {
                console.log(e);
                router.push(`/dashboard/${e.target.value}`);
            }}
            value={value}
        >
            <Radio.Button value="subcription">Subcription</Radio.Button>
            <Radio.Button value="revenue">Revenue</Radio.Button>
        </Radio.Group>
    );
};

export default OptionChart;
