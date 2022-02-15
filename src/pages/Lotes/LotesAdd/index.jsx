import React, { useState } from 'react';
import { ABoxAll, ABoxBody, ABoxHeader, ABoxHeaderTitle } from '../../../components/Boxes';
import { ABreadcumb } from '../../../components/Breadcumbs';
import { AButtomAdd } from '../../../components/Buttons';
import { AInput, AInputSearch, ASelect } from '../../../components/Forms/Inputs';
import { IconContext } from 'react-icons';
import { IoFileTrayStacked } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ABoxForm, ABoxFormBody } from '../../../components/Forms/BoxForm';
import { AForm } from '../../../components/Forms';

const LotesAdd = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <ABoxAll>
            <ABoxHeader>
                <ABoxHeaderTitle>
                    <IconContext.Provider value={{ className: "text-xl font-medium" }}>
                        <div>
                            <IoFileTrayStacked />
                        </div>
                    </IconContext.Provider>
                    <h1 className='ml-1 text-lg font-medium'>Lotes</h1>
                </ABoxHeaderTitle>
                <ABreadcumb links={
                    [
                        { label: "Lotes", url: "/lotes", linked: true },
                        { label: "Adicionar Lotes", url: "/lotesadd", linked: false }
                    ]
                } />
            </ABoxHeader>

            <ABoxHeader>
                <AButtomAdd />
                <AInputSearch place="Buscar por lote" />
            </ABoxHeader>

            <ABoxBody>
                <ABoxForm
                    infoTitle="Titulo"
                    infoText="Informação"
                >
                    <AForm action="#">

                        <ABoxFormBody>
                            <DatePicker
                                closeOnScroll={(e) => e.target === document}
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            <AInput
                                id="lote"
                                type="text"
                                // ref=""
                                place="Lote"
                                label="Lote"
                                colspan={3}
                            />

                            <AInput
                                id="lote"
                                type="text"
                                // ref=""
                                place="Lote"
                                label="Lote"
                                colspan={3}
                            />

                            <AInput
                                id="lote"
                                type="text"
                                // ref=""
                                place="Lote"
                                label="Lote"
                                colspan={4}
                            />

                            <ASelect
                                optiondef="Selecione"
                                options={[{ uid: 1, value: "RS" }]}
                                label="País"
                                colspan={3}
                            />

                        </ABoxFormBody>
                    </AForm>
                </ABoxForm>
            </ABoxBody>
        </ABoxAll>
    );
};

export default LotesAdd;
