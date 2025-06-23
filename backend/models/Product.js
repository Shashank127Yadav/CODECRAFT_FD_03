const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: String,
    rating: Number,
    comment: String,
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: Number,
    image: String,
    category: String,
    stock: Number,
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

// Add averageRating virtual
productSchema.virtual("averageRating").get(function () {
  if (!this.reviews || this.reviews.length === 0) return 0;
  const total = this.reviews.reduce((acc, review) => acc + review.rating, 0);
  return total / this.reviews.length;
});

// Enable virtuals in JSON output
productSchema.set("toJSON", { virtuals: true });
productSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Product", productSchema);
