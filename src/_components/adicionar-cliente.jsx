import { Formik } from "formik";
import { InputText } from "./input-text";
import * as yup from "yup";

const schema = yup.object({
  nome: yup
    .string()
    .required("Nome é obrigatório")
    .min(10, "O nome deve ter no mínimo 10 caracteres")
    .max(30, "O nome deve ter no máximo 30 caracteres"),
  email: yup
    .string()
    .email("Endereço de email inválido")
    .required("Email é obrigatório"),
  nascimento: yup
    .date()
    .required("A Data de Nascimento é obrigatório")
    .max(
      new Date(),
      "A Data de Nascimento não pode ser maior que a data atual"
    ),
});

export function AdicionarCliente() {
  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={{
          nome: "john doe",
          email: "johndow@gmail.com",
          nascimento: "1998-12-12",
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {(props) => {
          return (
            <form noValidate onSubmit={props.handleSubmit}>
              <InputText id="nome" name="nome" type="text" label="Nome" />

              <InputText id="email" name="email" type="email" label="Email" />

              <InputText
                id="nascimento"
                name="nascimento"
                type="date"
                label="Data de Nascimento"
              />

              <button type="submit">Adicionar</button>
            </form>
          );
        }}
      </Formik>
    </>
  );
}
