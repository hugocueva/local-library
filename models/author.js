var mongoose = require("mongoose");
const { DateTime } = require("luxon");

var Schema = mongoose.Schema;
var AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxlength: 100 },
  family_name: { type: String, required: true, maxlength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
  return `${this.family_name}, ${this.first_name}`;
});

AuthorSchema.virtual("lifespan_dates").get(function () {
  if (this.date_of_death) {
    let date_of_death = DateTime.fromJSDate(this.date_of_death).toLocaleString(
      DateTime.DATETIME_MED
    );
    let date_of_birth = DateTime.fromJSDate(this.date_of_birth).toLocaleString(
      DateTime.DATETIME_MED
    );
    return `${date_of_birth} - ${date_of_death}`;
  }
  return "";
});

/* return DateTime.fromJSDate(this.due_back).toLocaleString(
  DateTime.DATETIME_MED
); */

AuthorSchema.virtual("lifespan").get(function () {
  return (
    this.date_of_death.getYear() - this.date_of_birth.getYear()
  ).toString();
});

AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

module.exports = mongoose.model("Author", AuthorSchema);
