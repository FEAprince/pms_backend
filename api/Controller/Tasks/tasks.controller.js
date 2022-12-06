const express = require("express");
const router = express.Router();

const tasksService = require("../../Services/Tasks/tasks.service");
const tasksValidator = require("../../Controller/Tasks/tasks.validator");
const Tasks = require("../../Services/Tasks/tasks.modal");

router.post("/", tasksValidator.tasks, async (req, res) => {
  try {
    let { success, message, data } = await tasksService.create(req.body);

    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.post("/list", async (req, res) => {
  try {
    let { success, message, data } = await tasksService.list(
      req.body.where,
      req.body.pagination
    );
    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.put("/:id", async (req, res) => {
  try {
    let { success, message, data } = await tasksService.update(
      req.params.id,
      req.body
    );

    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { success, message, data } = await tasksService.softDelete(
      req.params.id
    );
    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/search", async (req, res) => {
  try {
    let searchText = req.body.searchText;

    if (typeof searchText === "number") {
      const result = await Tasks.find({
        $or: [{ taskPriority: searchText }],
      });
      if (result.length > 0) {
        return res.status(200).json({
          success: true,
          message: "data found successfully",
          data: result,
        });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "data  not found", data: [] });
      }
    } else {
      const result = await Tasks.find({
        $or: [
          { tasksName: { $regex: ".*" + searchText + ".*", $options: "i" } },
          {
            description: {
              $regex: ".*" + searchText + ".*",
              $options: "i",
            },
          },
          {
            tasksStatus: { $regex: ".*" + searchText + ".*", $options: "i" },
          },
          {
            taskStartDate: { $regex: ".*" + searchText + ".*", $options: "i" },
          },
          {
            taskEndDate: { $regex: ".*" + searchText + ".*", $options: "i" },
          },
        ],
      });
      if (result.length > 0) {
        return res.status(200).json({
          success: true,
          message: "Data found successfully",
          data: result,
        });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "data  not found", data: [] });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
