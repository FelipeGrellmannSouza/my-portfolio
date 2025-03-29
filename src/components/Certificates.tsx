import { CertificatesList } from "./CertificatesList"

export const Certificates = () => {


    return (
        <div className="flex flex-col ite">
            <h1 className="text-5xl" id="certificates">Certificates</h1>
            <div className="grid grid-flow-rol grid-cols-3 gap-2 mt-10">
                <CertificatesList />
            </div>
        </div>
    )
}
