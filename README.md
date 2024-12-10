# Deep Learning for Computer Vision [Stanford CS231n]

***Course Website*** [Deep Learning for CV [Stanford CS231n], latest](http://cs231n.stanford.edu/), [2022](http://cs231n.stanford.edu/2022/), [16-17 (CS131 CV: Foundations and Applications)](http://vision.stanford.edu/teaching/cs131_fall1617/schedule.html)

***Project 2022*** docs [Assignment {i}.pdf](./MyProject22/Original) and raw codebase [assignment{i}_colab.zip](./MyProject22/Original).

***Project 2016-17*** [HW{i}.zip](./Doc/1617Assignment).

*Environment and Setup*

- [Google Colab](https://colab.google/)
  - deployment: call `deployColab()`
  - see more at [Colab Tutorial from CS231n](./MyProject22/Original/colab-tutorial.ipynb%20-%20Colaboratory.pdf).
- Local PC (without GPU is fine in general)
  - dependency: `Python3.9`
  - [Setup.sh](./MyProject22/Setup.sh)

*Dataset* run the shell to download files to ``cs231n/datasets``.

[Details and notes for assignments (2022)](Doc/Assignment22.md)

- Image Classification + Localization $(x,y,w,h)$
- Object Detection
  - Variable numbers of output, sliding window
- Semantic / Instance Segmentation
- Image Captioning
- Video understanding
- Generative model (GAN, VAE)
- Self-Supervised Learning

[CIFAR-10 dataset](http://www.cs.toronto.edu/~kriz/cifar.html) visualization

![CIFAR-10](./MyProject22/Photo/CIFAR-10.png)

```python
idxs = np.random.choice(idxs, samples_per_class, replace=False) 
```

- Image Classification (Supervised Learning, Discrete label)
  * kNN
    * ![kNN-distance-matrix](./MyProject22/Photo/DistanceMatrix.png)
  * Softmax
  * Multi-class SVM
  * MLP
  * CNN
  * Cross Validation
- Cross Validation for hyperparameter
  - Split data into train, val; choose hyperparameters on val and evaluate on test
    ![kNN-k](./MyProject22/Photo/Cross-Validation_on_k.png)

*Two-Layer Neural Network architecure*: affine - relu - affine - softmax.

![LossAcc](./MyProject22/Photo/LossAccTwoLayerNet.png)

![Optim](./MyProject22/Photo/Optim.png)

- [Batch/Layer Normalization](./MyProject22/assignment2/BatchNormalization.ipynb)
- [Dropout](./MyProject22/assignment2/Dropout.ipynb)
- [Convolutional Neural Networks](./MyProject22/assignment2/ConvolutionalNetworks.ipynb) Convolution, Max Pool, Normalization
- [PyTorch on CIFAR-10](./MyProject22/assignment2/PyTorch.ipynb)
- [Network Visualization: Saliency Maps, Class Visualization, and Fooling Images](./MyProject22/assignment2/Network_Visualization.ipynb)

![Saliency Maps](./MyProject22/Photo/saliency_map.png)

***See more:*** [Assignments (2022) Implementation Details and Note](Doc/Assignment22.md)

## Machine Learning Knowledge Sharing

See more [ML_Guidance_Repo](https://github.com/PeterHUistyping/Machine_Learning_Guidance) about Machine Learning and Data Science in general
