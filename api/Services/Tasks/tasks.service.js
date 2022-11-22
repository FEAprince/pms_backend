const Tasks = require("../Tasks/tasks.modal");
const { responseMessages } = require("../../../helper/responseMessages");
const pagination = require("../../../helper/pagination");

exports.create = async (tasks) => {
  try {
    console.log("TASKS", tasks);
    const info = new Tasks({
      tasksName: tasks.tasksName,
      description: tasks.description,
      taskStartDate: tasks.taskStartDate,
      taskEndDate: tasks.taskEndDate,
      taskPriority: tasks.taskPriority,
      projectId: tasks.projectId,
      assignUsers: tasks.assignUsers,
      tasksStatus: tasks.tasksStatus,
    });

    const tasksData = await info.save();

    if (tasksData) {
      return {
        success: true,
        message: "Task created successfully!",
        data: tasksData,
      };
    } else {
      return {
        success: false,
        message: "Task not created!",
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
    const respose = await pagination.list(Tasks, where, datum, ["projectId"]);
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
    const result = await Tasks.findByIdAndUpdate(params_id, user, options);

    if (result) {
      return {
        success: true,
        message: "Tasks updated",
        data: result,
      };
    } else if (!result) {
      return {
        success: false,
        message: "Tasks not updated",
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
    const result = await Tasks.findByIdAndUpdate(params_id, {
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
