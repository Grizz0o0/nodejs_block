const Course = require("../models/Course");
const { MongooseToObject } = require("../../util/mongoose");
const { response } = require("express");
class CourseController {
    // GET /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render("courses/show", {
                    course: MongooseToObject(course),
                });
            })
            .catch(next);
    }

    // GET /courses/create
    create(req, res, next) {
        res.render("courses/create");
    }

    // POST /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${formData.videoID}/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLARznyL4tEv7UPp2h3oGAwVv2rbVg`;
        const course = new Course(formData);

        course
            .save()
            .then(() => res.redirect("/"))
            .catch((err) => {});
    }

    // GET /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render("courses/edit", {
                    course: MongooseToObject(course),
                })
            )
            .catch(next);
    }

    // PUT /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then((courses) => {
                res.redirect("/me/stored/courses");
            })
            .catch(next);
    }

    // DELETE /courses/:id
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }
}

module.exports = new CourseController();
