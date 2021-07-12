import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  Divider as MuiDivider,
  Typography,
} from "@material-ui/core";

import { StarBorder as StarIcon } from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const CardHeader = styled(MuiCardHeader)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Price = styled.div`
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing(3)}px;
`;

const Header = styled.div`
  padding: ${(props) => props.theme.spacing(6)}px 0;
`;

function Templates() {
  return (
    <React.Fragment>
      <Helmet title="Create" />
      <Typography variant="h3" gutterBottom display="inline">
        Create
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Pages
        </Link>
        <Typography>Pricing</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Header>

      </Header>

      <Grid container justify="center">
        <Grid item xs={12} lg={10}>
          <Grid container spacing={6} alignItems="flex-end">
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardHeader
                  title="Leumi Connector"
                  titleTypographyProps={{ align: "center" }}
                  pb={0}
                  pt={2}
                />
                <CardContent>
                  {/* <Price>
                    <Typography
                      component="h2"
                      variant="h1"
                      color="textPrimary"
                      align="center"
                      display="inline"
                    >
                      $30
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      display="inline"
                    >
                      /mo
                    </Typography>
                  </Price> */}
                  {/* <Typography variant="subtitle1" align="center">
                    50 users included
                    <br />
                    30 GB of storage
                    <br />
                    Help center access
                    <br />
                    Phone & email support
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                    Choose
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardHeader
                  title="Create React App"
                  titleTypographyProps={{ align: "center" }}
                  pb={0}
                  pt={2}
                />
                <CardContent>
                  {/* <Price>
                    <Typography
                      component="h2"
                      variant="h1"
                      color="textPrimary"
                      align="center"
                      display="inline"
                    >
                      $0
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      display="inline"
                    >
                      /mo
                    </Typography>
                  </Price> */}
                  {/* <Typography variant="subtitle1" align="center">
                    10 users included
                    <br />
                    2 GB of storage
                    <br />
                    Help center access
                    <br />
                    Email support
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                  Choose
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardHeader
                  title="Spring Boot JAVA"
                  titleTypographyProps={{ align: "center" }}
                  pb={0}
                  pt={2}
                />
                <CardContent>
                  {/* <Price>
                    <Typography
                      component="h2"
                      variant="h1"
                      color="textPrimary"
                      align="center"
                      display="inline"
                    >
                      $0
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      display="inline"
                    >
                      /mo
                    </Typography>
                  </Price> */}
                  {/* <Typography variant="subtitle1" align="center">
                    10 users included
                    <br />
                    2 GB of storage
                    <br />
                    Help center access
                    <br />
                    Email support
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                  Choose
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardHeader
                  title="Spring Boot JAVA"
                  titleTypographyProps={{ align: "center" }}
                  pb={0}
                  pt={2}
                />
                <CardContent>
                  {/* <Price>
                    <Typography
                      component="h2"
                      variant="h1"
                      color="textPrimary"
                      align="center"
                      display="inline"
                    >
                      $0
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      display="inline"
                    >
                      /mo
                    </Typography>
                  </Price> */}
                  {/* <Typography variant="subtitle1" align="center">
                    10 users included
                    <br />
                    2 GB of storage
                    <br />
                    Help center access
                    <br />
                    Email support
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                  Choose
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardHeader
                  title="Spring Boot JAVA"
                  titleTypographyProps={{ align: "center" }}
                  pb={0}
                  pt={2}
                />
                <CardContent>
                  {/* <Price>
                    <Typography
                      component="h2"
                      variant="h1"
                      color="textPrimary"
                      align="center"
                      display="inline"
                    >
                      $0
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      display="inline"
                    >
                      /mo
                    </Typography>
                  </Price> */}
                  {/* <Typography variant="subtitle1" align="center">
                    10 users included
                    <br />
                    2 GB of storage
                    <br />
                    Help center access
                    <br />
                    Email support
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                  Choose
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardHeader
                  title="Spring Boot JAVA"
                  titleTypographyProps={{ align: "center" }}
                  pb={0}
                  pt={2}
                />
                <CardContent>
                  {/* <Price>
                    <Typography
                      component="h2"
                      variant="h1"
                      color="textPrimary"
                      align="center"
                      display="inline"
                    >
                      $0
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      display="inline"
                    >
                      /mo
                    </Typography>
                  </Price> */}
                  {/* <Typography variant="subtitle1" align="center">
                    10 users included
                    <br />
                    2 GB of storage
                    <br />
                    Help center access
                    <br />
                    Email support
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                  Choose
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardHeader
                  title="Spring Boot JAVA"
                  titleTypographyProps={{ align: "center" }}
                  pb={0}
                  pt={2}
                />
                <CardContent>
                  {/* <Price>
                    <Typography
                      component="h2"
                      variant="h1"
                      color="textPrimary"
                      align="center"
                      display="inline"
                    >
                      $0
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      display="inline"
                    >
                      /mo
                    </Typography>
                  </Price> */}
                  {/* <Typography variant="subtitle1" align="center">
                    10 users included
                    <br />
                    2 GB of storage
                    <br />
                    Help center access
                    <br />
                    Email support
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                  Choose
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardHeader
                  title="Spring Boot JAVA"
                  titleTypographyProps={{ align: "center" }}
                  pb={0}
                  pt={2}
                />
                <CardContent>
                  {/* <Price>
                    <Typography
                      component="h2"
                      variant="h1"
                      color="textPrimary"
                      align="center"
                      display="inline"
                    >
                      $0
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      display="inline"
                    >
                      /mo
                    </Typography>
                  </Price> */}
                  {/* <Typography variant="subtitle1" align="center">
                    10 users included
                    <br />
                    2 GB of storage
                    <br />
                    Help center access
                    <br />
                    Email support
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                  Choose
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Templates;
