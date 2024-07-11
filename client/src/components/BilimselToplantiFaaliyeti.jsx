import React from 'react';
import { useFormikContext } from 'formik';
import QuestionItem from './QuestionItem';

const BilimselToplantiFaaliyeti = () => {
    const formik = useFormikContext();
    console.log(formik.values);

    return (
        <>
            <QuestionItem
                value={formik.values.questions.section_8.questions_1}
                name={"questions.section_8.questions_1"}
                onChange={(e) => formik.setFieldValue("questions.section_8.questions_1", e.target.value)}
                header={"8. Bilimsel Toplantı Faaliyeti (Başvurulan bilim alanı ile ilgili ve adayın hazırladığı lisansüstü tezlerden üretilmemiş olmak kaydıyla)"}
                title={"A) Uluslararası bilimsel toplantılarda sunulan (poster hariç), tam metni veya özeti matbu veya elektronik olarak bildiri kitapçığında yayımlanmış çalışmalar.  (3 PUAN)"}
            />
            <QuestionItem
                value={formik.values.questions.section_8.questions_2}
                name={"questions.section_8.questions_2"}
                onChange={(e) => formik.setFieldValue("questions.section_8.questions_2", e.target.value)}
                title={"B) Ulusal bilimsel toplantılarda sunulan (poster hariç), tam metni veya özeti matbu veya elektronik olarak bildiri kitapçığında yayımlanmış çalışmalar.  (2 PUAN)"}
                paragraf={"Bu madde kapsamında en az 5 puan almak zorunludur, en fazla 10 puan alınabilir. Aynı toplantıda sunulan en fazla bir bildiri puanlanır."}
                paragraf_direction={"down"}
            />

        </>


    );
}

export default BilimselToplantiFaaliyeti;
