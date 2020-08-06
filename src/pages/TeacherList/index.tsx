import React from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import {
  FormSearchTeachers,
  InputBlock,
  Main,
  PageTeacherList,
} from "./styles";

const TeacherList: React.FC = () => (
  <PageTeacherList>
    <PageHeader title="Estes são os proffys disponíveis.">
      <FormSearchTeachers>
        <InputBlock>
          <label htmlFor="subject">Matéria</label>
          <input type="text" id="subject" />
        </InputBlock>
        <InputBlock>
          <label htmlFor="week_day">Dia da semana</label>
          <input type="text" id="week_day" />
        </InputBlock>
        <InputBlock>
          <label htmlFor="time">Hora</label>
          <input type="text" id="time" />
        </InputBlock>
      </FormSearchTeachers>
    </PageHeader>
    <Main>
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </Main>
  </PageTeacherList>
);

export default TeacherList;
