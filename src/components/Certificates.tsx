import { CertificatesList } from "./CertificatesList"
type Props = {
    title: string;
    itemList: [];
}
export const Certificates = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-5xl" id="tecnologias">Tecnologias</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3  gap-2 mt-10">
                <CertificatesList />
            </div>
        </div>
    )
}
