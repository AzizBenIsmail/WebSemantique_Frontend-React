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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import { getBateaux, getVoituresEtVelos } from "../../api";
// const [voituresEtVelosData, setVoituresEtVelosData] = useState([]);
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card} from "@mui/material";
import MDTypography from "../../components/MDTypography";
import DataTable from "../../examples/Tables/DataTable";



function VoituresSEtVelos() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8085/voiture_velo");
        setData(response.data.results.bindings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Define the columns for your table
  const columns = [
    { Header: "Nom", accessor: "nom.value" },
    { Header: "Prénom", accessor: "prenom.value" },
    { Header: "Nationalité", accessor: "nationalite.value" },
    { Header: "Âge", accessor: "age.value" },
  ];


  return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    VoituresEtVelos
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                      table={{
                        columns: columns,
                        rows: data,
                      }}
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>
  );
}

export default VoituresSEtVelos;
