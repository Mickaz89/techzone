import React from "react";
import styled, { withTheme } from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";


import { Bar } from "react-chartjs-2";

import { red, green, blue } from "@material-ui/core/colors";

import {
  Avatar as MuiAvatar,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid as MuiGrid,
  LinearProgress as MuiLinearProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import {
  Briefcase,
  DollarSign,
  ExternalLink,
  Facebook,
  Home,
  Instagram,
  MapPin,
  ShoppingBag,
  Twitter,
} from "react-feather";

import IntegrationsList from "./IntegrationsList";


const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Button = styled(MuiButton)(spacing);

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Grid = styled(MuiGrid)(spacing);

const SalesRevenue = withTheme(({ theme }) => {

return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Integrations
        </Typography>
        <IntegrationsList/>
      </CardContent>
    </Card>
  );
});

function Developper() {
  return (
    <React.Fragment>
        
      <Grid container spacing={6}>
        <Grid item xs={12} >
          <SalesRevenue />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Developper;
