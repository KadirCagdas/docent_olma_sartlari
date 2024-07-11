const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    department: {
      type: String
    },
    email: {
      type: String,

    },
    total_point: {
      type: Number
    },
    questions: {
      section_1: {
        questions_1: "",
        questions_2: "",
        questions_3: "",
      },
      section_2: {
        questions_1: "",
        questions_2: "",
        questions_3: "",
        questions_4: "",
      },
      section_3: {
        questions_1: "",
        questions_2: "",
        questions_3: "",
        questions_4: "",
      },
      section_4: {
        questions_1: "",
        questions_2: "",
      },
      section_5: {
        questions_1: "",
        questions_2: "",
        questions_3: "",
      },
      section_6: {
        questions_1: "",
        questions_2: "",
      },
      section_7: {
        questions_1: "",
        questions_2: "",
        questions_3: "",
        questions_4: "",
      },
      section_8: {
        questions_1: "",
        questions_2: "",
      },
      section_9: {
        questions_1: "",
        questions_2: ""
      }

    },

  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Survey", SurveySchema);
