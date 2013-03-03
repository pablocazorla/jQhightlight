(function(){
	
	
 hypStr= {
		_str : '',
		_orig : '',
		
		init : function(st){
			this._str = st;
			this._orig = st;
			this._hsmark = true;
			this.reset = function(st){
				if(st!==undefined){
					this._orig = st;
				}
				this._str = this._orig;
				return this;
			};
			this.str = function(st){
				if(st){
					this._str = "" + st;				
					return this;
				}else{
					return this._str;
				}
			};
			this.wrap = function(st1,st2){
				if(st2 === undefined){
					st2 = st1;
				}
				this._str = st1 + this._str + st2;
				return this;
			};
			this.wrapTag = function(st){
				var inds = st.indexOf(' ');
				if(inds !== -1){
					var std = st.substring(0, inds);
				}else{
					var std = st;
				}
				this.wrap('<'+st+'>','</'+std+'>');
				
				return this;
			};
			this.replaceWord = function(arg,st){
				if(typeof arg === "string"){
					var re = new RegExp(arg, "g");
				}else{
					var re = arg;
				}
				this._str = this._str.replace(re,st);
				return this;
			};
			this.saveHtmlTags = function(){
				this.replaceWord('<','&lt;').replaceWord('>','&gt;');
				return this;
			};
			this.highlight = function(st,cl){
				if(cl === undefined){
					cl = 'highlight';
				}
				this.replaceWord(st,'<span class="'+cl+'">$&</span>');
				return this;
			};
			this._testStr = function(pat){
				if(typeof pat === 'string'){
					if(this._ind(pat)!== -1){
						return true;
					}else{			
						return false;
					}
				}else{			
					return pat.test(this._str);
				}
			};
			this.lower = function(){
				this._str  = this._str.toLowerCase();
				return this;
			};
			this.upper = function(){
				this._str  = this._str.toUpperCase();
				return this;
			};
			this.append = function(st){
				this._str  = this._str + this._confirmStr(st);
				return this;
			};
			this.prepend = function(st){
				this._str  = this._confirmStr(st) + this._str;
				return this;
			};
			this._confirmStr = function(st){
				if(st._hsmark){
					var re = st._str;
				}else{
					var re = '' + st;
				}
				return re;
			};
			this._length = function(){
				return this._str.length;
			};
			this._ind = function(st,num){
				if(!num){
					num = 0;
				}
				return this._str.indexOf(st,num);
			};
			this._lastInd = function(st,num){
				if(!num){
					num = this._str.length;
					
				}
				return this._str.lastIndexOf(st,num);
			};
			this.beetween = function(st1,st2,excl){
				var ind1 = this._str.indexOf(st1);
				var ind2 = this._str.indexOf(st2);			
				if(ind1 > ind2){
					var start = ind2;
					var end = ind1;
				}else{
					var start = ind1;
					var end = ind2;
				}			
				if(start === -1){start = 0;}
				if(end === -1){end = this._str.length;}
				if(excl){
					--start;
					++end;
				}							this._str = this._str.substring(start, end);
				return this;
			};
			this.erase = function(st){
				if(st.length){
					this.replaceWord(st,'');
				}else{
					this._str = '';
				}
				
			};
			this._array = function(st){
				if(st===undefined){
					st = ',';
				}			
				return this._str.split(st);			
			};
			this.joinArray = function(arr,glue){
				if(glue===undefined){
					glue = '';
				}	
				this._str = arr.join(glue);
				return this;
			};
			this.insert = function(st,ind){
				if(ind===undefined){
					ind = 0;
				}
				var st1 = this._str.substring(0,ind);
				var st2 = this._str.substring(ind);
				this._str = st1 + st + st2;
				return this;
			};
			
			return this;			
		},
			
		
		
		
		
		//
		
		
		
		
	}
	window.hyp = hypStr;
	
	window.hs = function(args){
		return new window.hyp.init(args);	
	}
})();