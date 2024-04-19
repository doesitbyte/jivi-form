import React from "react";
import { FormPageComponent } from "../../utils/formPageProps";
import { Col, Row } from 'antd';
import dayjs from "dayjs";
import { GenderEnum } from "../../utils/formSchema";
import JiviHeader from "../ui/JiviHeader";

type keyColProps = {
    keyName: string;
}
const KeyComponent: React.FC<keyColProps> = ({ keyName }) => {
    return (
        <Col span={12} className="my-2">
            <p className="text-jiviBlack font-bold text-lg">{keyName.toString()}</p>
        </Col>
    )
};

type valueColProps = {
    value: string;
}
const ValueCol: React.FC<valueColProps> = ({ value }) => {
    return (
        <Col span={12} className="my-2">
            <p className="text-jiviBlack font-medium text-lg">{value.toString()}</p>
        </Col>
    )
};

const Preview: FormPageComponent = ({ formMethods }) => {

    const values = formMethods.getValues();

    return (<div className="h-full">
        <JiviHeader title="Preview" />
        <section className="flex-col justify-between h-full mt-8">
            <div className="mt-4 mb-8">
                <p className="font-semibold text-jiviBlack">Please confirm your details to continue.</p>
            </div>

            <div className="text-jivi w-full">
                <Row>
                    <KeyComponent keyName={"Heart Rate: "} />
                    <ValueCol value={values.heartRate.toString() + "bpm"} />
                </Row>
                <Row>
                    <KeyComponent keyName={"Blood Pressure: "} />
                </Row>
                <Row>
                    <KeyComponent keyName={"Systolic: "} />
                    <ValueCol value={values.bpSys.toString() + " mmHg"} />
                </Row>
                <Row>
                    <KeyComponent keyName={"Diastolic: "} />
                    <ValueCol value={values.bpDia.toString() + "mmHg"} />
                </Row>
                <Row>
                    <KeyComponent keyName={"Name: "} />
                    <ValueCol value={values.name.toString()} />
                </Row>
                <Row>
                    <KeyComponent keyName={"Date of Birth: "} />
                    <ValueCol value={dayjs(values.dateOfBirth).format("MMMM MM, YYYY")} />
                </Row>
                <Row>
                    <KeyComponent keyName={"Gender: "} />
                    <ValueCol value={GenderEnum[values.gender]} />
                </Row>
                {/* <Row>
                    <KeyComponent keyName={"Weight: "} />
                    <ValueCol value={"65".toString() + "kg"} />
                </Row>
                <Row>
                    <KeyComponent keyName={"Age: "} />
                    <ValueCol value={"25".toString() + "years"} />
                </Row> */}
            </div>
        </section >
    </div>
    )
}

export default Preview;