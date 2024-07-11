import React from 'react';
import { useFormikContext } from 'formik';
import QuestionItem from './QuestionItem';

const Makaleler = () => {
    const formik = useFormikContext();
    console.log(formik.values);

    return (
        <>
            <QuestionItem
                value={formik.values.questions.section_1.questions_1}
                name={"questions.section_1.questions_1"}
                onChange={(e) => formik.setFieldValue("questions.section_1.questions_1", e.target.value)}
                header={"1. Makaleler"}
                paragraf={"Bu maddenin a bendi kapsamında en az bir makalede başlıca yazar olmak kaydıyla en az 40 puan alınmalıdır."}
                paragraf_direction={"down"}
                title={"A)SCI, SCI-Expanded, SSCI veya AHCI kapsamındaki dergilerde yayımlanmış  makale  (HER BİR MAKALE İÇİN 20 PUAN)"}
            />
            <QuestionItem
                value={formik.values.questions.section_1.questions_2}
                name={"questions.section_1.questions_2"}
                onChange={(e) => formik.setFieldValue("questions.section_1.questions_2", e.target.value)}

                title={"B)Diğer uluslararası hakemli dergilerde yayımlanmış makale   (HER BİR MAKALE İÇİN 8 PUAN)"}
            />
            <QuestionItem
                value={formik.values.questions.section_1.questions_3}
                name={"questions.section_1.questions_3"}
                onChange={(e) => formik.setFieldValue("questions.section_1.questions_3", e.target.value)}
                paragraf={`Bu maddenin c bendi kapsamında en az 8 puan almak zorunludur.Yabancı uyruklu
                adaylar ile yurtdışı doçentlik denkliği başvurusu yapan adaylar, ULAKBİM tarafından
                taranan ulusal hakemli dergilerde yayımlanmış makale koşulunu sağlayamamaları
                durumunda, bunun yerine aynı puanı a bendi kapsamında ilave olarak sağlayacaklardır.`}
                paragraf_direction={"down"}
                title={"C)ULAKBİM tarafından taranan ulusal hakemli dergilerde yayımlanmış makale (HER BİR MAKALE İÇİN 8 PUAN)"}
            />


        </>
    );
}

export default Makaleler;
