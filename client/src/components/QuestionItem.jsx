import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

const QuestionItem = ({ title, header, value, name, paragraf, paragraf_direction, onChange }) => {
    const formik = useFormikContext();

    const handleChange = (e) => {
        const tarvalue = e.target.value;
        // Sadece 1 haneli değerler kabul edilsin
        if (tarvalue.length <= 3) {
            // Eğer değer boş değilse ve 5'ten büyük değilse formik'e değeri atayalım
            if (tarvalue !== '' && parseInt(tarvalue) <= 100) {
                formik.setFieldValue(name, parseInt(tarvalue));
            } else {
                // Eğer değer boş değilse ve 5'ten büyükse, 5 olarak set edelim
                if (tarvalue !== '') {
                    formik.setFieldValue(name, 100);
                } else {
                    // Eğer değer boşsa, formik'e boş değer olarak set edelim
                    formik.setFieldValue(name, '');
                }
            }
        }
    };





    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            {header && (
                <span
                    style={{
                        fontWeight: 'bold',
                        display: 'block',
                        width: '100%',
                        padding: '1rem 0',
                        textAlign: 'center',
                    }}
                >
                    {header}
                </span>
            )}

            {
                (paragraf_direction == "up" && paragraf) ? (
                    <strong>
                        {paragraf}
                    </strong>
                ) : null
            }



            <div
                style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >


                <label
                    style={{
                        borderRadius: '.25rem',
                        padding: '.5rem',
                        border: 'none',
                        color: 'black',
                        backgroundColor: 'white',
                    }}
                >

                    {title}

                </label>
                <input
                    name={name}
                    value={value}
                    onChange={handleChange}
                    style={{
                        borderRadius: '.5rem',
                        padding: '.5rem',
                        textAlign: "center"
                    }}
                    type="text"
                />
            </div>
                {
                    (paragraf_direction == "down" && paragraf) ? (
                        <strong>
                            {paragraf}
                        </strong>
                    ) : null
                }
        </div>
    );
};

export default QuestionItem;
