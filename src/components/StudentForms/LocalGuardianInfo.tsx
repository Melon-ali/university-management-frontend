"use client";

import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";

const LocalGuardianInfo = () => {
    return (
        <div style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
            marginTop: "10px"
            }}>
                
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}
                style={{
                    marginBottom: "10px"
                }}
                >
                    <FormInput type="text" name="student.name.localGuardianName" size="large" label="Local Guardian Name"/>
                </Col>
                <Col className="gutter-row" span={6}
                style={{
                    marginBottom: "10px"
                }}
                >
                    <FormInput type="text" name="student.name.localGuardianOccupation" size="large" label="Local Guardian Occupation"/>
                </Col>
                <Col className="gutter-row" span={6}
                style={{
                    marginBottom: "10px"
                }}
                >
                    <FormInput type="number" name="student.name.localGuardianContactNo" size="large" label="Local Guardian Contact No."/>
                </Col>
                <Col className="gutter-row" span={6}
                style={{
                    marginBottom: "10px"
                }}
                >
                    <FormInput type="text" name="student.name.address" size="large" label="Local Guardian Address"/>
                </Col>
                
            </Row>
        </div>
    );
};

export default LocalGuardianInfo;