import { useState } from 'react';
import { Tab, Tabs, Button, Container, Typography, TextField } from '@mui/material';

export default function HateSpeechDetectionView() {
  const [tabIndex, setTabIndex] = useState(0);
  const [modelname, setModelname] = useState('');
  const [file, setFile] = useState(null);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleModelNameChange = (event) => {
    setModelname(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hate Speech Detection
        </Typography>
        <Tabs value={tabIndex} onChange={handleTabChange} aria-label="Hate Speech Detection Tabs">
          <Tab label="Hate Speech Model Testing" />
          <Tab label="Upload Data" />
          <Tab label="Results" />
        </Tabs>
      </Container>

      <Container sx={{ mt: 3 }}>
        {tabIndex === 0 && (
          <Container>
            <Typography variant="body1" sx={{ fontSize: '16px', mt: 2 }}>
              Welcome to the Hate Speech Model Testing Platform. Here, you can test various hate speech detection models to evaluate their performance. Select a model and upload a dataset to begin testing.
            </Typography>
          </Container>
        )}

        {tabIndex === 1 && (
          <Container>
            <Typography variant="h6" sx={{ mt: 2 }}>Upload Dataset</Typography>
            <form
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px' }}
            >
              <TextField
                label="Model Name"
                variant="outlined"
                fullWidth
                value={modelname}
                onChange={handleModelNameChange}
                sx={{ mb: 2 }}
                required
              />
              <input
                type="file"
                onChange={handleFileChange}
                accept=".json"
                required
                style={{ marginBottom: '1rem' }}
              />
              <Button variant="contained" color="primary">
                Upload and Test
              </Button>
            </form>
          </Container>
        )}

        {tabIndex === 2 && (
          <Container>
            <Typography variant="h6" sx={{ mt: 2 }}>Analysis Results</Typography>
            {/* Placeholder for future results display */}
            <Typography variant="body1" sx={{ mt: 1 }}>
              Results will be displayed here after processing.
            </Typography>
          </Container>
        )}
      </Container>
    </>
  );
}
