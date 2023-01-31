# Stanford_CS231n-Deep_Learning-for-Computer_Vision
http://cs231n.stanford.edu/ <br>
http://vision.stanford.edu/teaching/cs131_fall1617/schedule.html

## Assignment 2022 
### Assignment 0: Python Numpy
<a href=2022Assignment/assignment0/python.ipynb>Python Tutorial</a> <br>
·Jupyter and Colab Notebooks <br>
·Python
Basic data types, Containers(Lists, Dictionaries, Sets, Tuples) <br>
Functions, 
Classes <br>
·Numpy
Arrays, 
Array indexing (** Boolean/ Integer Array Indexing**)
Datatypes, 
Array math, 
Broadcasting <br>
·SciPy
Image operations, 
MATLAB files, 
Distance between points <br>
·Matplotlib 
Plotting, Subplots, Images
## Assignment 1: Neural Networks
Q1: k-Nearest Neighbor classifier <br>
Q2: Training a Support Vector Machine <br>
Q3: Implement a Softmax classifier <br>
Q4: Two-Layer Neural Network <br>
Q5: Higher Level Representations: Image Features Submitting your work 

## Assignment1: Image Classification Pipeline
Data-driven approach (train/predict stages)
```
Training data shape:  (50000, 32, 32, 3)<br>
Training labels shape:  (50000,) <br>
The CIFAR-10 dataset: 32x32 colour images in 10 classes, with 6000 images per class. There are 50000 training images and 10000 test images. 
### k-Nearest Neighbor (kNN)
Training: the classifier takes the training data and simply remembers it.<br>
Testing: kNN classifies every test image by comparing to all training images and transfering the labels of the k most similar training examples.<br>
Compute the distance between each test point in X and each training point
in self.X_train using a (nested) loop over both the training data and the
test data.<br>
Distance Matrics, L1, L2 distances, np.linalg.norm()<br>
Cross-validation: the value of k is cross-validated

## Linear Classifier: parametric approach
Preprocessing: Reshape into single row; Normalization, center, scale; Add bias dimension term<br>
Implement a fully-vectorized loss function, analytic gradient expression <br>
Validation set to tune the learning rate and regularization strength <br>
Optimize the loss function with SGD <br>
Visualize the final learned weights
### SVM
Loss Function: max-margin loss<br>

### Softmax
Loss Function: cross-entropy<br>

### Two-Layer Neural Network