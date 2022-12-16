const express = require("express");
const router = express.Router();

const projectService = require("../../Services/Projects/projects.service");
const projectValidator = require("../../Controller/Projects/projects.validator");
const Projects = require("../../Services/Projects/projects.modal");

router.post("/", projectValidator.projects, async (req, res) => {
  try {
    let { success, message, data } = await projectService.create(req.body);

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
    let { success, message, data } = await projectService.list(
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
    let { success, message, data } = await projectService.update(
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
    let { success, message, data } = await projectService.softDelete(
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
router.get("/:id", async (req, res) => {
  try {
    let { success, message, data } = await projectService.Exists({
      _id: req.params.id,
    });
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
      const result = await Projects.find({
        $or: [{ projectName: searchText }],
      }).populate(["categoryId", "assignUsers"]);
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
      const result = await Projects.find({
        where: { isActive: true },
        $or: [
          { projectName: { $regex: ".*" + searchText + ".*", $options: "i" } },
          {
            projectDescription: {
              $regex: ".*" + searchText + ".*",
              $options: "i",
            },
          },
          {
            projectStatus: { $regex: ".*" + searchText + ".*", $options: "i" },
          },
          {
            projectEndDate: { $regex: ".*" + searchText + ".*", $options: "i" },
          },
          {
            projectStartDate: {
              $regex: ".*" + searchText + ".*",
              $options: "i",
            },
          },
        ],
      })
        .populate(["categoryId", "assignUsers"])
        .limit(req.body.rowsPerPage)
        .skip(req.body.rowsPerPage * (req.body.page - 1));

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
