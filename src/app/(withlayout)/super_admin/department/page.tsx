"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";

const ManageDepartmentPage = () => {

    const query:Record<string, any> = {};
    const [size, setSize] = useState<Number>(10);
    const [page, setPage] = useState<Number>(1);

    query["limit"] = size;
    query["page"] = page;

    const { data, isLoading } = useDepartmentsQuery({...query});

    const { departments, meta } = data;
    console.log(data);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            // sorter: true,
            sorter: (a: any, b:any ) => a.age - b.age,
          },
          {
            title: 'Action',
            render: function(data:any) {
                return <Button onClick={() => console.log(data)} type="primary" danger>X</Button>
            }
          },
    ];

    
    const tableData = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
        },
    ];
    
    const onPaginationChange = (page:number, pageSize:number) => {
        console.log("Page:", page, "PageSize:",pageSize);
    }

    const onTableChange = (pagination:any, filter:any, sorter:any) => {
        const {order, field } = sorter;
        console.log(order, field);
    }

    const { role } = getUserInfo() as any;
    return (
        <div>
            <UMBreadCrumb items={
                [
                    {
                        label: `${role}`, 
                        link: `/${role}`,
                    }
                ]
            }/>
            <h1>Department List</h1>
            <Link href="/super_admin/department/create">
                <Button type="primary">Create</Button>
            </Link>
            <UMTable 
                loading={isLoading} 
                columns={columns} 
                dataSource={tableData}
                pageSize={5}
                totalPages={100}
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />
        </div>
    );
};

export default ManageDepartmentPage;