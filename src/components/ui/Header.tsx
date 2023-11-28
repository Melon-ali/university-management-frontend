import { Layout, Row, Dropdown, Button, MenuProps, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getUserInfo, removeUserInfo } from '@/services/auth.service';
import { authKey } from '@/constants/storageKey';
import { useRouter } from 'next/navigation';

const { Header:AnHeader } = Layout;

const Header = () => {
    const router = useRouter();
    const { role } = getUserInfo() as any;

    const logOut = () => {
        removeUserInfo(authKey);
        router.push("/login")
    }

    const items: MenuProps['items'] = [
        {
            key: "0",
            label: (
            <Button onClick={logOut} type='text' danger>
                Logout
            </Button>
            )
        }
    ]
    return (
        <AnHeader style={{background: "#fff"}}>
            <Row justify="end" align="middle" style={{height: "100%"}}>
                <p>{role}</p>
                <Dropdown menu={{ items }}>
                    <a>
                    <Space wrap size={16}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Space>
                    </a>
                </Dropdown>
            </Row>
        </AnHeader>
    );
};

export default Header;