import Link from "next/link";

import { Modal } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

import { ListServices } from "../_assets/services";

import styleModal from "../_css/modal.module.scss"

const ModalService = ({ data, open, setOpen }: { data?: ListServices; open: boolean; setOpen: Function }) => {
    if (!data) {
        return;
    }
    const { name, description } = data;

    return (
        <>
            <Modal
                centered
                open={open}
                footer={false}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <Title level={1} id={styleModal.modSerName}>
                    {name}
                </Title>
                <Paragraph id={styleModal.modSerDesc}>{description}</Paragraph>
                <p className="text-right">
                    For more information, please kindly{" "}
                    <Link href={"/contact"}>
                        contact
                    </Link>{" "}
                    us.
                </p>
            </Modal>
        </>
    );
};

export default ModalService