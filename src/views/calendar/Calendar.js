import React from 'react';
import PropTypes from 'prop-types';
import { CWidgetBrand, CRow, CCol } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import ChartLineSimple from '../charts/ChartLineSimple';

const Calendar = ({withCharts})=>{

  // render

  return withCharts ?
  <CRow>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        rightHeader="12"
        rightFooter="events"
        leftHeader="4"
        leftFooter="meetings"
        color="gradient-warning"
      >
        <CIcon
          name="cil-calendar"
          height="52"
          className="my-4"
        />
        <ChartLineSimple
          className="position-absolute w-100 h-100"
          backgroundColor="rgba(255,255,255,.1)"
          dataPoints={[35, 23, 56, 22, 97, 23, 64]}
          label="Followers"
          labels="months"
        />
      </CWidgetBrand>
    </CCol>
  </CRow> :
  
  <CRow>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        rightHeader="12"
        rightFooter="events"
        leftHeader="4"
        leftFooter="meetings"
        color="gradient-warning"
      >
        <CIcon
          name="cil-calendar"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>
  </CRow>
}

Calendar.propTypes = {
  withCharts: PropTypes.bool
}

export default Calendar