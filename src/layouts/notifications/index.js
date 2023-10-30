/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";
import axios from "axios";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import _ from "lodash";
function Notifications() {
  const [GroupedAvions, setGroupedAvions] = useState(null);

  async function fetchData() {
    axios
      .get("http://localhost:8085/avion", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        const avions = res.data.results.bindings;
        
        // Group data by the combination of "model," "marque," "matricule," "nom," and "prenom"
        const groupedAvions = avions.reduce((groups, item) => {
          const key = `${item.model.value}_${item.marque.value}_${item.matricule.value}_${item.nom.value}_${item.prenom.value}`;
          if (!groups[key]) {
            groups[key] = {
              model: item.model,
              marque: item.marque,
              matricule: item.matricule,
              nom: item.nom,
              prenom: item.prenom,
              sameAttributes: [],
            };
          }
          
          if (groups[key].sameAttributes.length < 3) { // Limit to 3 sameAttributes
            groups[key].sameAttributes.push({
              sameMarque: item.sameMarque,
              sameModel: item.sameModel,
            });
          }
          
          return groups;
        }, {});

        // Convert the object back to an array
        const groupedAvionsArray = Object.values(groupedAvions);

        setGroupedAvions(groupedAvionsArray);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
      <Grid container spacing={3} justifyContent="center">
  {GroupedAvions?.map((group, index) => (
    <Grid item xs={12} lg={12} key={index}>
      <Card>
        <CardContent>
        <h3>AVIONS </h3>
          <MDAlert color="blue" dismissible>
          <div className="">
    <img
      src="https://www.travelandleisure.com/thmb/WeC5b5s0KfcMSbGVdSDWtwdcs6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-jetblue-american-airlines-planes-PLANEMODEL0323-414a2a831f7d44ee9d12a1d47eba3242.jpg"
      alt="Airplane"
      style={{ width: '50%', height: 'auto' }}
    />
  </div>
            <div>
              <td>Marque :{group.marque.value}</td> <br />
              <td>Matricule : {group.matricule.value}</td><br />
              <td>Model : {group.model.value}</td><br />
              <td>nom de pilote : {group.nom.value}</td><br />
              <td>prenom de pilote :{group.prenom.value}</td><br />
            </div>
          </MDAlert>
        </CardContent>
        <CardContent>
        <MDAlert color="dark" dismissible>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <h3> Similar Objects </h3>
    {group.sameAttributes.map((attr, idx) => (
      <Card key={idx} style={{ margin: '0 100px' }}>
        <CardContent>
          <p>Same Marque: {attr.sameMarque.value}</p>
          <p>Same Model: {attr.sameModel.value}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</MDAlert>


        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;