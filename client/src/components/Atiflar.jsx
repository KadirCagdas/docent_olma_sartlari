import React from 'react';
import { useFormikContext } from 'formik';
import QuestionItem from './QuestionItem';

const Atiflar = () => {
    const formik = useFormikContext();
    console.log(formik.values);

    return (
        <>
            <QuestionItem
                value={formik.values.questions.section_5.questions_1}
                name={"questions.section_5.questions_1"}
                onChange={(e) => formik.setFieldValue("questions.section_5.questions_1", e.target.value)}
                header={"5. Atıflar"}
                title={"A)SCI, SCI-Expanded, SSCI ve AHCI tarafından taranan dergilerde; Uluslararası yayınevleri tarafından yayımlanmış kitaplarda yayımlanan ve adayın yazar olarak yer almadığı yayınlardan her birinde, metin içindeki atıf sayısına bakılmaksızın adayın atıf yapılan her eseri için; Uluslararası yayınevleri tarafından yayımlanmış kitaplarda yayımlanan ve adayın yazar olarak yer almadığı yayınlardan her birinde, metin içindeki atıf sayısına bakılmaksızın adayın atıf yapılan her eseri için        (3 PUAN)"}
                paragraf_direction={"down"}
            />
            <QuestionItem
                value={formik.values.questions.section_5.questions_2}
                name={"questions.section_5.questions_2"}
                onChange={(e) => formik.setFieldValue("questions.section_5.questions_2", e.target.value)}
                title={"B)SCI, SCI-Expanded, SSCI ve AHCI dışındaki endeksler tarafından taranan dergiler; Uluslararası yayınevleri tarafından yayımlanmış kitaplarda bölüm yazarı olarak yayımlanan ve adayın yazar olarak yer almadığı yayınlardan her birinde, metin içindeki atıf sayısına bakılmaksızın adayın atıf yapılan her eseri için      (2 PUAN)"}
            />
            <QuestionItem
                value={formik.values.questions.section_5.questions_3}
                name={"questions.section_5.questions_3"}
                onChange={(e) => formik.setFieldValue("questions.section_5.questions_3", e.target.value)}
                title={"C)Ulusal hakemli dergilerde; Ulusal yayınevleri tarafından yayımlanmış kitaplarda yayımlanan ve adayın yazar olarak yer almadığı yayınlardan her birinde, metin içindeki atıf sayısına bakılmaksızın adayın atıf yapılan her eseri için   (1 PUAN)"}
                paragraf={"Bu madde kapsamında en az 4 puan alınması zorunludur. Bu madde kapsamında en fazla 20 puan alınabilir."}
                paragraf_direction={"down"}
            />
            
        </>

    );
}

export default Atiflar;
