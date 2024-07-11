const router = require("express").Router();
const sendMail = require("../mail");
const Survey = require("../models/Survey");

router.post("/", async (req, res) => {





  const calculatePassable = (body) => {

    const newPost = body.questions

    let total = 0;

    if (newPost.section_1.questions_1 < 40 || newPost.section_1.questions_3 == 0) return 0


    const section_1_total = newPost.section_1.questions_1 +
      newPost.section_1.questions_2 + newPost.section_1.questions_3

    const section_2_total =
      (newPost.section_2.questions_1 +
        newPost.section_2.questions_2 +
        newPost.section_2.questions_3) >= 10 ? 10 : (newPost.section_2.questions_1 +
          newPost.section_2.questions_2 +
          newPost.section_2.questions_3)


    const section_3_total = (newPost.section_3.questions_1
      + newPost.section_3.questions_2
      + newPost.section_3.questions_3
      + newPost.section_3.questions_4) >= 20 ? 20 : (newPost.section_3.questions_1
        + newPost.section_3.questions_2
        + newPost.section_3.questions_3
        + newPost.section_3.questions_4)

    const section_4_total = newPost.section_4.questions_1
      + newPost.section_4.questions_2

    if ((newPost.section_5.questions_1
      + newPost.section_5.questions_2
      + newPost.section_5.questions_3) < 4) {
      return 0
    }


    const section_5_total = (newPost.section_5.questions_1
      + newPost.section_5.questions_2
      + newPost.section_5.questions_3) >= 20 ? 20 : newPost.section_5.questions_1
      + newPost.section_5.questions_2
    + newPost.section_5.questions_3


    const section_6_total = (newPost.section_6.questions_1
      + newPost.section_6.questions_2) >= 10 ? 10 : (newPost.section_6.questions_1
        + newPost.section_6.questions_2)

    const section_7_total = (newPost.section_7.questions_1
      + newPost.section_7.questions_2
      + newPost.section_7.questions_3
      + newPost.section_7.questions_4
    ) >= 20 ? 20 : (newPost.section_7.questions_1
      + newPost.section_7.questions_2
      + newPost.section_7.questions_3
      + newPost.section_7.questions_4)


    if (newPost.section_8.questions_1
      + newPost.section_8.questions_2 < 5) {
      return 0
    }


    const section_8_total = newPost.section_8.questions_1
      + newPost.section_8.questions_2 >= 10 ? 10 : newPost.section_8.questions_1
    + newPost.section_8.questions_2

    if (newPost.section_9.questions_1
      + newPost.section_9.questions_2 < 2) {
      return 0
    }
    const section_9_total = newPost.section_9.questions_1
      + newPost.section_9.questions_2 >= 4 ? 4 : newPost.section_9.questions_1
    + newPost.section_9.questions_2


    total = section_1_total
      + section_2_total
      + section_3_total
      + section_4_total
      + section_5_total
      + section_6_total
      + section_7_total
      + section_8_total
      + section_9_total

    return total

  }

  const newValues = {
    questions: {
      section_1: {
        questions_1: req.body.questions.section_1.questions_1 * 20,
        questions_2: req.body.questions.section_1.questions_2
          >= 1 ? 1
        * 8 : 0,
        questions_3: req.body.questions.section_1.questions_3 * 8
      },
      section_2: {
        questions_1: req.body.questions.section_2.questions_1 * 10,
        questions_2: req.body.questions.section_2.questions_2 * 5,
        questions_3: req.body.questions.section_2.questions_3 * 5,
        questions_4: req.body.questions.section_2.questions_4 * 3
      },
      section_3: {
        questions_1: req.body.questions.section_3.questions_1 * 20,
        questions_2: req.body.questions.section_3.questions_2 * 10,
        questions_3: req.body.questions.section_3.questions_3 * 15,
        questions_4: req.body.questions.section_3.questions_4 * 8
      },
      section_4: {
        questions_1: req.body.questions.section_4.questions_1 * 20,
        questions_2: req.body.questions.section_4.questions_2 * 10
      },
      section_5: {
        questions_1: req.body.questions.section_5.questions_1 * 3,
        questions_2: req.body.questions.section_5.questions_2 * 2,
        questions_3: req.body.questions.section_5.questions_3 * 1,
      },
      section_6: {
        questions_1: req.body.questions.section_6.questions_1 * 4,
        questions_2: req.body.questions.section_6.questions_2 * 2
      },
      section_7: {
        questions_1: req.body.questions.section_7.questions_1 * 15,
        questions_2: req.body.questions.section_7.questions_2 * 10,
        questions_3: req.body.questions.section_7.questions_3 * 6,
        questions_4: req.body.questions.section_7.questions_4 * 4
      },
      section_8: {
        questions_1: req.body.questions.section_8.questions_1 * 3,
        questions_2: req.body.questions.section_8.questions_2 * 2
      },
      section_9: {
        questions_1: req.body.questions.section_9.questions_1 * 3,
        questions_2: req.body.questions.section_9.questions_2 * 2
      }

    }
  }


  const newPost = new Survey({
    ...req.body,
    total_point: calculatePassable(newValues),
    ...newValues

  });
  try {




    const savedPost = await newPost.save();




    await sendMail(req.body.email, "Doçentlik Başvurusu Hk.", `<p>Sayın ${req.body.name}, Doçentlik başvurunuz sonucunuz değerlendirme kriterlerine göre <strong>${calculatePassable(newPost) >= 100 ? "olumlu" : "olumsuz"
    }</strong> sonuçlanmıştır.
    </p> <br> <br> <span>Puan: <strong>${calculatePassable(newPost)}</strong></span>`)



    res.status(200).json({
      savedPost
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

//tekli gonderi getirmex  
router.get("/:id", async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    res.status(200).json(survey);
  } catch (e) {
    res.status(500).json(e);
  }
});

//tum gonderileri getirme

router.get("/", async (req, res) => {
  try {
    let survey;

    survey = await Survey.find();

    res.status(200).json(survey);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/name", async (req, res) => {
  try {
    const surveys = await Survey.find({ name: req.body.name });



    res.status(200).json({
      // avg,
      surveys,
    });
  } catch (e) {
    res.status(500).json(e);
  }
});



module.exports = router;
