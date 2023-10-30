import React, { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Grid, Card } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable"; // Import your DataTable component here
import axios from "axios";

function Tables() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8085/voitureSecurite");
        setData(response.data.results.bindings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Define the columns for your table
  const columns = [
    {
      Header: "Voiture",
      accessor: (row) => {
        const value = row.voiture.value.replace("http://www.semanticweb.org/ontologies/5twin6/scaredtocompile/transport#", "");
        return value;
      },
    },

    {
      Header: "Regulation Route",
      accessor: (row) => {
        const value = row.regulationR.value.replace("http://www.semanticweb.org/ontologies/5twin6/scaredtocompile/transport#", "");
        return value;
      },
    },
    {
      Header: "Regulation Passagers",
      accessor: (row) => {
        const value = row.regulationP.value.replace("http://www.semanticweb.org/ontologies/5twin6/scaredtocompile/transport#", "");
        return value;
      },
    },



    { Header: "Model", accessor: "model.value" },
    { Header: "Marque", accessor: "marque.value" },
    { Header: "Vitesse Moyenne Route", accessor: "vitesseMoyenneRoute.value" },
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
                    Voiture
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

export default Tables;
