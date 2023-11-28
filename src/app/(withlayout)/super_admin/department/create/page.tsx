"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";


const CreatePage = () => {
    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: "super_admin",
                        link: "/super_admin",
                    },
                    {
                        label: "department",
                        link: "/super_admin/department",
                    },
                ]}
            />    
            <h1>Create Page</h1>
        </div>
    );
};

export default CreatePage;