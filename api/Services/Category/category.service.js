const Category = require("../Category/category.modal");
const { responseMessages } = require("../../../helper/responseMessages");
const pagination = require("../../../helper/pagination");

exports.create = async (category) => {
  try {
    const info = new Category({
      categoryName: category.categoryName,
    });

    const categoryData = await info.save();

    if (categoryData) {
      return {
        success: true,
        message: "Category created successfully!",
        data: categoryData,
      };
    } else {
      return {
        success: false,
        message: "Category not created!",
        data: "",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "ERROR_ADDING_CATEGORY_DETAILS",
      data: error.message,
    };
  }
};

exports.list = async (where, datum) => {
  try {
    const respose = await pagination.list(Category, where, datum);
    if (respose) {
      return {
        success: true,
        message: responseMessages.dataFound,
        data: respose,
      };
    } else {
      return {
        success: false,
        message: responseMessages.dataNotFound,
        data: respose,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
      data: null,
    };
  }
};
exports.update = async (params_id, category) => {
  try {
    const options = { new: true };
    const result = await Category.findByIdAndUpdate(
      params_id,
      category,
      options
    );

    if (result) {
      return {
        success: true,
        message: "Category updated",
        data: result,
      };
    } else if (!result) {
      return {
        success: false,
        message: "Category not updated",
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
      data: null,
    };
  }
};
exports.softDelete = async (params_id) => {
  try {
    const result = await Category.findByIdAndUpdate(params_id, {
      isActive: false,
    });
    if (result) {
      return {
        success: true,
        message: responseMessages.userDeleted,
        data: result,
      };
    } else {
      return {
        success: false,
        message: responseMessages.userNotFound,
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
      data: null,
    };
  }
};
