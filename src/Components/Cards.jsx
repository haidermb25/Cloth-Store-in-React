import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { FaCartPlus, FaEye } from 'react-icons/fa';
import "./Cards.css";

const Cards = ({ image, title, description }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true); // Open dialog
  };

  const handleClose = () => {
    setOpen(false); // Close dialog
  };

  return (
    <div className="card-container">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-icons">
        <div className="card-icon">
          <FaCartPlus />
        </div>
        <div className="card-icon" onClick={handleOpen}>
          <FaEye />
        </div>
      </div>

      {/* Dialog Box */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent className="dialog-content">
          <div className="dialog-body">
            {/* Image */}
            <img
              src={image}
              alt={title}
              className="dialog-image"
            />
            {/* Description */}
            <div className="dialog-details">
              <p className="dialog-description">{description}</p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cards;
