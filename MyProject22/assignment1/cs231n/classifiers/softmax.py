from builtins import range
import numpy as np
from random import shuffle
from past.builtins import xrange


def softmax_loss_naive(W, X, y, reg):
    """
    Softmax loss function, naive implementation (with loops)

    Inputs have dimension D, there are C classes, and we operate on minibatches
    of N examples.

    Inputs:
    - W: A numpy array of shape (D, C) containing weights.
    - X: A numpy array of shape (N, D) containing a minibatch of data.
    - y: A numpy array of shape (N,) containing training labels; y[i] = c means
      that X[i] has label c, where 0 <= c < C.
    - reg: (float) regularization strength

    Returns a tuple of:
    - loss as single float
    - gradient with respect to weights W; an array of same shape as W
    """
    # Initialize the loss and gradient to zero.
    loss = 0.0
    dW = np.zeros_like(W)

    #############################################################################
    # TODO: Compute the softmax loss and its gradient using explicit loops.     #
    # Store the loss in loss and the gradient in dW. If you are not careful     #
    # here, it is easy to run into numeric instability. Don't forget the        #
    # regularization!                                                           #
    #############################################################################
    # *****START OF YOUR CODE (DO NOT DELETE/MODIFY THIS LINE)*****

    dW = np.zeros(W.shape)  # initialize the gradient as zero

    # compute the loss and the gradient
    num_classes = W.shape[1]
    num_train = X.shape[0]
    loss = 0.0
    for i in range(num_train):
        scores = X[i].dot(W)          # shape (C,1)    

        # shift values for 'scores' for numeric reasons (overflow cautious -> \infinity )
        scores -= scores.max()        # stable softmax

        softmax_array = np.exp(scores)/np.sum(np.exp(scores)) # shape (C,1)

        correct_class_score = scores[y[i]]

        loss += - np.log(softmax_array[y[i]])
       
        # dL(i)/df(y[i]) = softmax_array(y[i]) - 1 , f = scores
        scores_ = softmax_array.reshape(1,-1)   # shape (1,C)
        scores_[:,y[i]] -= 1

        # df(y[i]) / dW = X_i
        dXi = X[i].T.reshape(-1,1)     # shape (D,1)

        # Hence, dL / dW = (dL(i)/df)  * (df / dW) 
        dW += np.dot(dXi, scores_)     # shape (D,C) 

    # Loss over the dataset 
    # = average of loss over all training examples
    loss /= num_train

    # Add regularization to the loss.
    loss += reg * np.sum(W * W)

    # Add regularization to the gradient.
    dW /= num_train
    dW += 2 * reg * W
      

    # *****END OF YOUR CODE (DO NOT DELETE/MODIFY THIS LINE)*****

    return loss, dW


def softmax_loss_vectorized(W, X, y, reg):
    """
    Softmax loss function, vectorized version.

    Inputs and outputs are the same as softmax_loss_naive.
    """
    # Initialize the loss and gradient to zero.
    loss = 0.0
    dW = np.zeros_like(W)

    #############################################################################
    # TODO: Compute the softmax loss and its gradient using no explicit loops.  #
    # Store the loss in loss and the gradient in dW. If you are not careful     #
    # here, it is easy to run into numeric instability. Don't forget the        #
    # regularization!                                                           #
    #############################################################################
    # *****START OF YOUR CODE (DO NOT DELETE/MODIFY THIS LINE)*****

    num_classes = W.shape[1]
    num_train = X.shape[0]

    scores = X.dot(W)           # shape (N , C)

    # shift values for 'scores' for numeric reasons (overflow cautious -> \infinity )
    scores -= scores.max(axis = 1, keepdims = True)    # stable softmax

    softmax_array = np.exp(scores)/np.sum(np.exp(scores), axis = 1, keepdims = True)   
    # shape (N, C)

    loss = -np.log(softmax_array[np.arange(num_train), y])  # shape (N, )

    # loss is a single number
    loss = np.sum(loss)                                     # shape (1, )

    # Right now the loss is a sum over all training examples, but we want it
    # to be an average instead so we divide by num_train.
    loss /= num_train

    # Add regularization to the loss.
    loss += reg * np.sum(W * W)
    
    # df(y[i]) / dW = X_i

    # dL(i)/df(y[i]) = softmax_array(y[i]) - 1 , f = scores
    scores_ = softmax_array.reshape(num_train, -1)
    scores_[np.arange(num_train), y] -= 1

    # Hence, dL / dW = (dL(i)/df)  * (df / dW) 
    dW = np.dot(X.T, scores_) / num_train
    # (D,N) * (N,C) = (D, C)

    # Add regularization loss to the gradient
    dW += 2 * reg * W  

    # *****END OF YOUR CODE (DO NOT DELETE/MODIFY THIS LINE)*****

    return loss, dW
