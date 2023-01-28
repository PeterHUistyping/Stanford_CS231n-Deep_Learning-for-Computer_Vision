# Stanford_CS231n-Deep_Learning-for-Computer_Vision
http://cs231n.stanford.edu/ \
http://vision.stanford.edu/teaching/cs131_fall1617/schedule.html

## Assignment 2022 
### Assignment 0: Python Numpy
<a href=2022Assignment/assignment0/python.ipynb>Python Tutorial</a> \
·Jupyter and Colab Notebooks \
·Python
Basic data types, Containers(Lists, Dictionaries, Sets, Tuples) \
Functions, 
Classes \
·Numpy
Arrays, 
Array indexing (** Boolean/ Integer Array Indexing**)
Datatypes, 
Array math, 
Broadcasting \
·SciPy
Image operations, 
MATLAB files, 
Distance between points \
·Matplotlib 
Plotting, Subplots, Images
## Assignment 1: Neural Networks
Q1: k-Nearest Neighbor classifier \
Q2: Training a Support Vector Machine \
Q3: Implement a Softmax classifier \
Q4: Two-Layer Neural Network \
Q5: Higher Level Representations: Image Features Submitting your work$$

## Assignment1: Image Classification Pipeline
Data-driven approach (train/predict stages)\
Training data shape:  (50000, 32, 32, 3)\
Training labels shape:  (50000,)

### k-Nearest Neighbor (kNN)
Training: the classifier takes the training data and simply remembers it.\
Testing: kNN classifies every test image by comparing to all training images and transfering the labels of the k most similar training examples.\
Compute the distance between each test point in X and each training point
in self.X_train using a (nested) loop over both the training data and the
test data.\
Distance Matrics, L1, L2 distances, np.linalg.norm()\
The value of k is cross-validated