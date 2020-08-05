import React from 'react';
import PageHeader from '../../components/PageHeader';

import { PageTeacherList, FormSearchTeachers, InputBlock } from './styles';


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
  </PageTeacherList>
);

export default TeacherList;