"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import { bloodGroupOption } from "@/constants/global";
import { Col, Row } from "antd";


const StudentBasicInfo = () => {


    const onSubmit = async(data:any)=> {
        try {
            console.log(data);
        }
        catch (err:any) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <div>
                <Form submitHandler={onSubmit}>
                    <div style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "10px",
                        marginTop: "10px"
                        }}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={8}
                            style={{
                                marginBottom: "10px"
                            }}
                            >
                                <FormInput type="email" name="admin.email" size="large" label="Email"/>
                            </Col>
                            <Col className="gutter-row" span={8}
                            style={{
                                marginBottom: "10px"
                            }}
                            >
                                <FormInput type="text" name="admin.contactNo" size="large" label="Contact Number"/>
                            </Col>
                            <Col className="gutter-row" span={8}
                            style={{
                                marginBottom: "10px"
                            }}
                            >
                                <FormInput type="text" name="admin.emergencyContactNo" size="large" label="Emergency Contact Number"/>
                            </Col>
                            <Col className="gutter-row" span={12}
                                style={{
                                    marginBottom: "10px"
                                }}   
                                >
                                <FormDatePicker name="admin.dateOfBirth" label="Date Of Birth"
                                size="large"
                                />
                            </Col>
                            <Col className="gutter-row" span={12}
                                style={{
                                    marginBottom: "10px"
                                }}   
                                >
                                <FormSelectField size="large" name="admin.blood" options={bloodGroupOption} 
                                label="Blood Group"
                                placeholder="Select"
                                />
                            </Col>
                            
                            <Col span={12} style={{ margin: "10px 0" }}>
                                <FormTextArea
                                name="admin.presentAddress"
                                label="Present address"
                                rows={4}
                                />
                            </Col>

                            <Col span={12} style={{ margin: "10px 0" }}>
                                <FormTextArea
                                name="admin.permanentAddress"
                                label="Permanent address"
                                rows={4}
                                />
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default StudentBasicInfo;