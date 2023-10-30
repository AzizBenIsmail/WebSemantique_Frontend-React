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
import Card from "@mui/material/Card";
const tableStyle = {
  border: "1px solid #000", // Bordure du tableau
  borderCollapse: "collapse", // Pour améliorer l'apparence des bordures
  width: "100%", // Largeur du tableau
};

const thStyle = {
  border: "1px solid #000", // Style des cellules d'en-tête
  padding: "8px", // Rembourrage pour l'espace
};

const tdStyle = {
  border: "1px solid #000", // Style des cellules de données
  padding: "8px", // Rembourrage pour l'espace
};
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import React, { useState, useEffect } from "react";
import axios from "axios";
function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
    .get("http://localhost:8085/bateau")
    .then((response) => {
      setData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Une erreur s'est produite lors de la récupération des données:", error);
      setLoading(false);
    });
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <div>
          <h1>Tableau des Bateaux</h1>
          {loading ? (
            <p>Chargement des données en cours...</p>
          ) : (
            <table style={tableStyle}>
              <thead>
              <tr>
                <th style={thStyle}>Nom Bateau</th>
                <th style={thStyle}>Ports</th>
                <th style={thStyle}>Capitaine</th>
                <th style={thStyle}>Nom</th>
                <th style={thStyle}>Mécanicien</th>
                <th style={thStyle}>Nom Mécanicien</th>
              </tr>
              </thead>
              <tbody>
              {data.results.bindings.map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.nomBateau.value}</td>
                  <td style={tdStyle}>{row.ports.value}</td>
                  <td style={tdStyle}>
                    {row.capitaine.value.replace("http://www.semanticweb.org/ontologies/5twin6/scaredtocompile/transport#", "")}
                  </td>
                  <td style={tdStyle}>{row.nom.value}</td>
                  <td style={tdStyle}>{row.mecanicien.value.replace("http://www.semanticweb.org/ontologies/5twin6/scaredtocompile/transport#", "")}
                  </td>
                    <td style={tdStyle}>{row.nomMecanicien.value}</td>
                </tr>
              ))}
              </tbody>
            </table>
          )}
        </div>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
