import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function Signup() {
	const [values, setValues] = useState({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});
	function NumberFormatCustom(props) {
		const { inputRef, onChange, ...other } = props;
	}

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const classes = useStyles();
	return (
		<Container component="main" maxWidth="xs">
			{/* <CssBaseline /> */}
			<div className={classes.paper}>
				<Avatar className="mb-3">
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={5}>
						<Grid item xs={12}>
							<TextField
								error={false}
								id="filled-error-helper-text"
								label="Email"
								variant="outlined"
								helperText=""
								size="small"
								fullWidth
								inputProps={{
									maxLength: 30,
								}}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								label="CNIC"
								variant="outlined"
								size="small"
								fullWidth
								inputProps={{
									maxLength: 13,
								}}
								helperText=""
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Mobile No."
								variant="outlined"
								id="outlined-start-adornment"
								size="small"
								fullWidth
								inputProps={{
									maxLength: 10,
								}}
								className={clsx(classes.margin, classes.textField)}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">+92</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControl
								className={clsx(classes.margin, classes.textField)}
								variant="outlined"
								size="small"
								fullWidth
							>
								<InputLabel htmlFor="outlined-adornment-password">
									Password
								</InputLabel>
								<OutlinedInput
									id="outlined-adornment-password"
									type={values.showPassword ? "text" : "password"}
									value={values.password}
									onChange={handleChange("password")}
									inputProps={{
										maxLength: 30,
									}}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{values.showPassword ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									}
									labelWidth={70}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl
								className={clsx(classes.margin, classes.textField)}
								variant="outlined"
								size="small"
								fullWidth
							>
								<InputLabel htmlFor="outlined-adornment-password">
									Confirm Password
								</InputLabel>
								<OutlinedInput
									id="outlined-adornment-password"
									type={values.showPassword ? "text" : "password"}
									value={values.password}
									onChange={handleChange("password")}
									inputProps={{
										maxLength: 30,
									}}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{values.showPassword ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									}
									labelWidth={135}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I accept Terms & Conditions"
							/>
						</Grid>
					</Grid>
					<Button
						type="button"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="#" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

export default Signup;
