import { useFormik } from "formik";

function TaskForm({ setTasks }) {
    const formik = useFormik({
        initialValues: {
            tittle: "",
            description: "",
            date: "",
            priority: "",
        },
        onSubmit: (values, { resetForm }) => {
            const newTask = { ...values, id: Date.now() };
            setTasks((prev) => [...prev, newTask]);
            resetForm();
        },
        validate: (values) => {
            const errors = {};
            if (!values.title) errors.title = "Başlık gerekli";
            if (!values.date) errors.date = "Tarih gerekli";
            if (!values.priority) errors.priority = "Öncelik seçilmeli";
            return errors;
        },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        {/* Buraya inputlar gelecek */}
      </form>
    );
}
export default TaskForm;