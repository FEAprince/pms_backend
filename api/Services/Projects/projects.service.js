const Projects = require("../Projects/projects.modal");
const { responseMessages } = require("../../../helper/responseMessages");
const pagination = require("../../../helper/pagination");

exports.create = async (projects) => {
  try {
    const info = new Projects({
      projectName: projects.projectName,
      projectDescription: projects.projectDescription,
      projectStartDate: projects.projectStartDate,
      projectEndDate: projects.projectEndDate,
      assignUsers: projects.assignUsers,
      projectStatus: projects.projectStatus,
      categoryId: projects.categoryId,
    });

    const projectData = await info.save();

    if (projectData) {
      return {
        success: true,
        message: "Project created successfully!",
        data: projectData,
      };
    } else {
      return {
        success: false,
        message: "Project not created!",
        data: "",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "ERROR_ADDING_USER_DETAILS",
      data: error.message,
    };
  }
};

exports.list = async (where, datum) => {
  try {
    const respose = await pagination.list(
      Projects,
      where,
      datum,

      ["categoryId", "assignUsers"]
    );

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
exports.update = async (params_id, user) => {
  try {
    const options = { new: true };
    const result = await Projects.findByIdAndUpdate(params_id, user, options);

    if (result) {
      return {
        success: true,
        message: "Project updated",
        data: result,
      };
    } else if (!result) {
      return {
        success: false,
        message: "Project not updated",
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
    const result = await Projects.findByIdAndUpdate(params_id, {
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
