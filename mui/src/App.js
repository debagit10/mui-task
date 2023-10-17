import React, { useState } from "react";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MuiTypography from "./components/MuiTypography";
import { MuiButton } from "./components/MuiButton.tsx";
import MuiTextField from "./components/MuiTextField.tsx";
import MuiSelect from "./components/MuiSelect.tsx";
import MuiRadioButton from "./components/MuiRadioButton.tsx";
import MuiCheckBox from "./components/MuiCheckBox.tsx";
import MuiSwitch from "./components/MuiSwitch.tsx";
import MuiRating from "./components/MuiRating.tsx";
import MuiAutoComplete from "./components/MuiAutoComplete.tsx";
import MuiLayout from "./components/MuiLayout.tsx";
import MuiCard from "./components/MuiCard.tsx";
import MuiAccordion from "./components/MuiAccordion.tsx";
import MuiImageList from "./components/MuiImageList.tsx";
import MuiNavbar from "./components/MuiNavbar.tsx";
import MuiLink from "./components/MuiLink.tsx";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs.tsx";
import MuiDrawer from "./components/MuiDrawer.tsx";
import MuiSpeedDial from "./components/MuiSpeedDial.tsx";
import MuiBottomNavigation from "./components/MuiBottomNavigation.tsx";
import MuiAvatar from "./components/MuiAvatar.tsx";
import MuiBadge from "./components/MuiBadge.tsx";
import MuiList from "./components/MuiList.tsx";
import MuiChip from "./components/MuiChip.tsx";
import MuiToolTip from "./components/MuiToolTip.tsx";
import MuiTable from "./components/MuiTable.tsx";
import MuiAlert from "./components/MuiAlert.tsx";
import MuiSnackBar from "./components/MuiSnackBar.tsx";
import MuiDialog from "./components/MuiDialog.tsx";
import MuiProgress from "./components/MuiProgress.tsx";
import MuiSkeleton from "./components/MuiSkeleton.tsx";
import MuiLoading from "./components/MuiLoading.tsx";
import MuiPicker from "./components/MuiPicker.tsx";
import MuiDateRange from "./components/MuiDateRange.tsx";
import MuiTabs from "./components/MuiTabs.tsx";
import MuiTimeline from "./components/MuiTimeline.tsx";
import Onboarding from "./Onboarding.tsx";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/*<MuiTypography /> <MuiButton />   <MuiSelect /> <MuiRadioButton /> <MuiLayout /> <MuiCheckBox /> <MuiSwitch /> <MuiRating /> <MuiAutoComplete />  <MuiCard /> <MuiAccordion /> <MuiImageList /> <MuiBreadcrumbs /> <MuiNavbar />
      <MuiDrawer />
      <MuiSpeedDial /> <MuiBottomNavigation /> <MuiAvatar />
      <MuiBadge /> <MuiList />
      <MuiChip />
      <MuiToolTip /> <MuiTextField /> <MuiTable /> <MuiAlert /> <MuiSnackBar /> <MuiDialog />  <MuiSkeleton /> <MuiLoading /> <MuiPicker /> <MuiDateRange /> <MuiTabs /> */}

        <Onboarding />
      </div>
    </LocalizationProvider>
  );
};

export default App;
