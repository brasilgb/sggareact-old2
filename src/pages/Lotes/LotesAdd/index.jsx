import React, { Fragment, useState } from 'react';
import { ABoxAll, ABoxBody, ABoxHeader, ABoxHeaderTitle } from '../../../components/Boxes';
import { ABreadcumb } from '../../../components/Breadcumbs';
import { AButtomBack } from '../../../components/Buttons';
import { AInput, AInputSearch } from '../../../components/Forms/Inputs';
import { IconContext } from 'react-icons';
import { IoFileTrayStacked } from "react-icons/io5";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';

import { ABoxForm, ABoxFormBody } from '../../../components/Forms/BoxForm';
import { AForm } from '../../../components/Forms';
import AProgressBar from '../../../components/AProgressBar';

const LotesAdd = ({ loading }) => {
    const [value, onChange] = useState(new Date());
    return (
        <Fragment>
            <AProgressBar loading={loading} />
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
                    <AButtomBack url="/lotes" />
                    <AInputSearch place="Buscar por lote" />
                </ABoxHeader>

                <ABoxBody>
                    <ABoxForm
                        infoTitle="Titulo"
                        infoText="Informação"
                    >
                        <AForm action="#">

                            <ABoxFormBody>

                                <div className="col-span-6 sm:col-span-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Data de cadastro
                                    </label>
                                    <DateTimePicker
                                        onChange={onChange}
                                        value={value}
                                        disableClock={true}
                                        format="dd/MM/yyyy"
                                        className="mt-1 w-full"
                                        autoFocus={false}
                                        locale="pt-BR"
                                        clearIcon=""
                                    />
                                </div>

                                <AInput
                                    id="lote"
                                    type="text"
                                    // ref=""
                                    place=""
                                    label="Descrição do lote"
                                    colspan={4}
                                />

                                <AInput
                                    id="lote"
                                    type="text"
                                    // ref=""
                                    place=""
                                    label="Aves fêmeas"
                                    colspan={4}
                                />

                                <AInput
                                    id="lote"
                                    type="text"
                                    // ref=""
                                    place=""
                                    label="Aves machos"
                                    colspan={4}
                                />

                            </ABoxFormBody>
                        </AForm>
                    </ABoxForm>
                </ABoxBody>
            </ABoxAll>
        </Fragment>
    );
};

export default LotesAdd;
