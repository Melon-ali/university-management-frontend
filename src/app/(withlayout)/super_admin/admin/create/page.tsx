"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Col, Row } from "antd";


const CreateAdmin = () => {


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
            <UMBreadCrumb
                items={[
                    {
                        label: "super_admin",
                        link: "/super_admin",
                    },
                    {
                        label: "admin",
                        link: "/super_admin/admin",
                    },
                ]}
            />    
            <h1>Create Admin</h1>

            <div>
                <Form submitHandler={onSubmit}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8}>
                            <FormInput type="text" name="name" size="large" label="First Name"/>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FormInput type="text" name="name" size="large" label="First Name"/>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FormInput type="text" name="name" size="large" label="First Name"/>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FormInput type="password" name="password" size="large" label="Password"/>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default CreateAdmin;