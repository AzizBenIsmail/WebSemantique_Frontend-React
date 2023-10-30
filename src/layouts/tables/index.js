import React, { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Grid, Card } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import axios from "axios";

function Tables() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8085/bateau");
        setData(response.data.results.bindings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      Header: 'Image',
      accessor: 'imageURL', // Assurez-vous d'avoir l'URL de l'image dans votre data
      Cell: ({  }) => (
        <img
          src={"https://www.quicksilver-boats.com/media/webpuryb/sundeck_range_930x560.png"} // URL de l'image
          alt="Bateau" // Texte alternatif de l'image
          width={150} // Largeur de l'image (ajustez selon vos besoins)
          height={120} // Hauteur de l'image (ajustez selon vos besoins)
        />
      ),
    },
    { Header: "Nom Bateau", accessor: "nomBateau.value" },
    { Header: "Ports", accessor: "ports.value" },
    {
      Header: "Capitaine",
      accessor: (row) => {
        const capitaine = row.capitaine.value.replace("http://www.semanticweb.org/ontologies/5twin6/scaredtocompile/transport#", "");
        return capitaine;
      },
    },
    { Header: "Nom", accessor: "nom.value" },
    {
      Header: "Mécanicien",
      accessor: (row) => {
        const mecanicien = row.mecanicien.value.replace("http://www.semanticweb.org/ontologies/5twin6/scaredtocompile/transport#", "");
        return mecanicien;
      },
    },
    { Header: "Nom Mécanicien", accessor: "nomMecanicien.value" },
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
                  Bateau
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
